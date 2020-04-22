$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/Features/FBUserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook User Registration",
  "description": "",
  "id": "facebook-user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"\u003cfname\u003e\" and \"\u003clname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"\u003cemailorMob\u003e\" and \"\u003cnewPWD\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"\u003cbDay\u003e\" and \"\u003cbMon\u003e\" and \"\u003cbYear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user selects gender as \"\u003cgender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "emailorMob",
        "newPWD",
        "bDay",
        "bMon",
        "bYear",
        "gender"
      ],
      "line": 12,
      "id": "facebook-user-registration;user-registration-form;;1"
    },
    {
      "cells": [
        "User1",
        "user1",
        "user1@",
        "user1123",
        "5",
        "4",
        "1988",
        "Male"
      ],
      "line": 13,
      "id": "facebook-user-registration;user-registration-form;;2"
    },
    {
      "cells": [
        "user2",
        "user2",
        "user2@",
        "user2123",
        "20",
        "10",
        "1991",
        "Female"
      ],
      "line": 14,
      "id": "facebook-user-registration;user-registration-form;;3"
    },
    {
      "cells": [
        "user3",
        "user3",
        "user3@",
        "user3123",
        "28",
        "2",
        "2003",
        "Female"
      ],
      "line": 15,
      "id": "facebook-user-registration;user-registration-form;;4"
    },
    {
      "cells": [
        "user4",
        "user4",
        "user4@",
        "user4123",
        "30",
        "6",
        "2000",
        "Male"
      ],
      "line": 16,
      "id": "facebook-user-registration;user-registration-form;;5"
    },
    {
      "cells": [
        "user5",
        "user5",
        "user5@",
        "user5123",
        "21",
        "8",
        "1995",
        "Female"
      ],
      "line": 17,
      "id": "facebook-user-registration;user-registration-form;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"User1\" and \"user1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"user1@\" and \"user1123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"5\" and \"4\" and \"1988\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user selects gender as \"Male\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 39
    },
    {
      "val": "user1",
      "offset": 51
    }
  ],
  "location": "registrationPageDefinition.user_Enters_firstname_and_lastname_as_and(String,String)"
});
