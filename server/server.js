var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var zipRoutes = require('./zipRoutes.js');
var nodemailer = require('nodemailer');

const db = require("./db/db");

app.use(cors());
app.use(bodyParser.json());

/*app.get("/getone", (req, res) => {
  db.getOne()
    .then(response => {
      res.send(response);
      res.end();
    })
    .catch(error => {
      res.end(error);
    });
});*/

app.get("/getall", (req, res) => {
    let zip = req.query.zip;
    let allZips = [];
    zipRoutes.getZipsWithinRadius(zip, 10)
        .then(response => {
            if (response && response.length) {
                response.forEach(e => {
                        allZips.push(e[0])
                    })
            }
        })
        .then(() => {
            db.getAll(allZips)
                .then(response => {
                    res.send(response);
                })
                .catch(error => {
                    console.log("Error on get all: ", error);
                    res.end(error);
                })
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(404);
        })
});

app.get("/getbyprice", (req, res) => {
    let zip = req.query.zip;
    let min = req.query.priceMin;
    let max = req.query.priceMax;
    let allZips = [];
    zipRoutes.getZipsWithinRadius(zip, 10)
        .then(response => {
          if (response && response.length) {
            response.forEach(e => {
              allZips.push(e[0])
            })
          }
        })
        .then(() => {
            db.getByPrice(allZips, min, max)
                .then(response => {
                    res.send(response);
                })
                .catch(error => {
                    console.log("Error on get all: ", error);
                    res.end(error);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(404);
                })
        });
});

app.post("/postlisting", (req, res) => {
    console.log(req.body.data);
    let newDocument = req.body.data;

    db.postListing(newDocument)
        .then(response => {
            res.end("Posted");
        })
        .catch(error => {
            res.end("Post listing error: ", error);
        });
});

app.get('/getcoords', (req, res) => {
    let zip = req.query.zip;
    let coordsArr = [];
    zipRoutes.getLocationFromZip(zip)
        .then(coords => {
            if (coords && coords.lat) {
              coordsArr = [coords.lat, coords.lng];
            }
        })
        .then(() => {
            res.send(coordsArr);
        })
        .catch(error => {
            console.log(error);
        })
});

// app.post('/savecontact', (req, res) => {
//     let contact = req.body.data;
//     db.postContactInfo(contact)
//         .then(response => {
//             res.send(response);
//         })
//         .catch(error => {
//             res.end("Post listing error: ", error);
//         });
// });

// POST route from contact form
app.post('/savecontact', (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  // Specify what the e-mail will look like
  const mailOpts = {
    from: 'Alcove',
    to: GMAIL_USER,
    subject: 'New message from contact form at Alcove',
    text: `${req.body.name} (${req.body.email}, ${req.body.phone}) says ${req.body.message}.  Start date: ${req.body.startDate}; end date: ${req.body.endDate}. Text messages allowed: ${req.body.text}.`
  }

  // Attempt to send the e-mail
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('The contact form failed to send.');
    } else {
      res.render('The contact form was successfully submitted.');
    }
  });
});


app.listen(process.env.PORT || 5500, function () {
    console.log("listening on port 5500!");
});
