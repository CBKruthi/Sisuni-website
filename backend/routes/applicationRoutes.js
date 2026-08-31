const express = require("express");

const Application = require("../models/Application");

const upload = require("../middleware/upload");

const router = express.Router();


/*
  POST: Apply for a job
*/

router.post(
  "/apply",

  upload.single("resume"),

  async (req, res) => {

    try {

      const {
        jobId,
        jobTitle,
        fullName,
        email,
        phone,
        portfolio,
        experience,
        coverLetter,
      } = req.body;


      // Check required fields

      if (
        !jobId ||
        !jobTitle ||
        !fullName ||
        !email ||
        !phone
      ) {

        return res.status(400).json({
          message: "Please fill all required fields",
        });

      }


      // Check resume

      if (!req.file) {

        return res.status(400).json({
          message: "Resume is required",
        });

      }


      // Create application

      const application =
        await Application.create({

          jobId,

          jobTitle,

          fullName,

          email,

          phone,

          portfolio,

          experience,

          coverLetter,

          resumeUrl:
            `/uploads/${req.file.filename}`,

        });


      return res.status(201).json({

        message:
          "Application submitted successfully",

        application,

      });


    } catch (error) {

      console.error(
        "Application error:",
        error
      );


      return res.status(500).json({

        message:
          "Application submission failed",

      });

    }

  }
);


/*
  GET: All applications
  Later protect this with admin middleware
*/

router.get(
  "/",

  async (req, res) => {

    try {

      const applications =
        await Application
          .find()
          .sort({
            createdAt: -1,
          });


      res.status(200).json(
        applications
      );


    } catch (error) {

      res.status(500).json({

        message:
          "Failed to fetch applications",

      });

    }

  }
);


/*
  GET: Applications for one job
*/

router.get(
  "/job/:jobId",

  async (req, res) => {

    try {

      const applications =
        await Application.find({

          jobId:
            req.params.jobId,

        });


      res.status(200).json(
        applications
      );


    } catch (error) {

      res.status(500).json({

        message:
          "Failed to fetch job applications",

      });

    }

  }
);


module.exports = router;