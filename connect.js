/**
 * Created by 1609963 on 11/04/2017.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
var url = 'mongodb://chisoftltd:9thMileCorner@@ds060649.mlab.com:60649/benjaminmongodb';
var MongoClient = mongodb.MongoClient;