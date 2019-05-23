---
layout: post
title:  "Tour Booking Website"
description: Tour booking software that integrates with PayPal and Google calendar.
date:   2019-05-01 00:05:31 +0700
categories: projects
tags: [jekyll, react, formik, express]
demo-link:
repo-link:
image: /assets/images/projects/private-guide-in-chiang-mai-mockup-1.png
---

I took on an ongoing client project to create a tour booking website. It started out as a simple static site that grew to more pages. The booking functionality began as a simple form that used Netlify's handy form feature to email the client. This was what was agreed upon in the original spec.
This project can be broken down into three parts.
A static landing page, a dynamic booking application and a an api server to handle integrations.

## Static site Technology
The static site was created using jekyll static generator. It is stored on a github repo and uses Netlify for continuous deployment. I can do a pull request from my development repo into master and the change appear live.
The site uses a custom bootstrap 4 style. I use sass to organize all the class files to keep track of things. Then all the scss files are compiled and minified into one css file on build.

![Static Site](/assets/images/projects/private-guide-in-chiang-mai-mockup-1.png)

## Dynamic Form
Later, the client would like to be able to have a better booking integration that lets the user add tour days dynamically. Now I could have just added some messy jquery and got the job done. But I knew we would want to do more with the data and have some scalability.

## React JS
Since I have an extensive background using React JS I decided to build the form using my boilerplate. React it my preferred method for making front end apps since it has a nice Virtual Dom and makes refactoring and re-usability a breeze. Deployment is continuous with Netlify. I use app as the protocol identifier with the static site url just to make things easier. ```app.[bookingsite].com``` to get to the booking app.

This is mobile first design.
![Static Site](/assets/images/projects/private-guide-in-chiang-mai-mockup-2.png)

But also handles desktop views:
![Static Site](/assets/images/projects/private-guide-in-chiang-mai-mockup-3.png)

## Backend Server Api
I build the back end node server using Express JS. It uses routers to handle requests. ```api.[booking-site].com/v1/bookings```
Just do a post request to this endpoint to add bookings. It handles server side validation but the front end does its own validation as well. The server handles put requests to make changes as well as deletes. So we can scale to the next project where we create a booking management app where the client can log in to make changes.
So far the api validates, emails client alert email, emails customer conformation and updates clients Google calendar.   

## Going forward
  - Customer can log back in to make changes with link from conformation email.
  - Client can view all bookings and make changes to them.


## [Static Site Demo](http://www.privateguidechiangmai.com)
## [Booking App Demo](http://app.privateguidechiangmai.com)
