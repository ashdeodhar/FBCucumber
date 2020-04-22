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
formatter.result({
  "duration": 40567063777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1@",
      "offset": 39
    },
    {
      "val": "user1123",
      "offset": 52
    }
  ],
  "location": "registrationPageDefinition.user_Enters_Email_and_new_password_as_and(String,String)"
});
formatter.result({
  "duration": 383899862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 38
    },
    {
      "val": "4",
      "offset": 46
    },
    {
      "val": "1988",
      "offset": 54
    }
  ],
  "location": "registrationPageDefinition.user_selects_birth_day_month_year_as_and_and(String,String,String)"
});
formatter.result({
  "duration": 427676866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 24
    }
  ],
  "location": "registrationPageDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 205651103,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_Clicks_on_SignUp_button()"
});
formatter.result({
  "duration": 3191057488,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 9678110,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.registrationPageDefinition.user_is_on_Login_Page(registrationPageDefinition.java:64)\r\n\tat ✽.Then User is on Login Page(./src/main/java/Features/FBUserRegistration.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2459404757,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"user2\" and \"user2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"user2@\" and \"user2123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"20\" and \"10\" and \"1991\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user selects gender as \"Female\"",
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
      "val": "user2",
      "offset": 39
    },
    {
      "val": "user2",
      "offset": 51
    }
  ],
  "location": "registrationPageDefinition.user_Enters_firstname_and_lastname_as_and(String,String)"
});
formatter.result({
  "duration": 21919615208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2@",
      "offset": 39
    },
    {
      "val": "user2123",
      "offset": 52
    }
  ],
  "location": "registrationPageDefinition.user_Enters_Email_and_new_password_as_and(String,String)"
});
formatter.result({
  "duration": 361170058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 38
    },
    {
      "val": "10",
      "offset": 47
    },
    {
      "val": "1991",
      "offset": 56
    }
  ],
  "location": "registrationPageDefinition.user_selects_birth_day_month_year_as_and_and(String,String,String)"
});
formatter.result({
  "duration": 427364433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "registrationPageDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 141181921,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_Clicks_on_SignUp_button()"
});
formatter.result({
  "duration": 3220882152,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 15578740,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.registrationPageDefinition.user_is_on_Login_Page(registrationPageDefinition.java:64)\r\n\tat ✽.Then User is on Login Page(./src/main/java/Features/FBUserRegistration.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2340114480,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"user3\" and \"user3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"user3@\" and \"user3123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"28\" and \"2\" and \"2003\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user selects gender as \"Female\"",
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
      "val": "user3",
      "offset": 39
    },
    {
      "val": "user3",
      "offset": 51
    }
  ],
  "location": "registrationPageDefinition.user_Enters_firstname_and_lastname_as_and(String,String)"
});
formatter.result({
  "duration": 20093821530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3@",
      "offset": 39
    },
    {
      "val": "user3123",
      "offset": 52
    }
  ],
  "location": "registrationPageDefinition.user_Enters_Email_and_new_password_as_and(String,String)"
});
formatter.result({
  "duration": 356635059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 47
    },
    {
      "val": "2003",
      "offset": 55
    }
  ],
  "location": "registrationPageDefinition.user_selects_birth_day_month_year_as_and_and(String,String,String)"
});
formatter.result({
  "duration": 438823937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "registrationPageDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 130241510,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_Clicks_on_SignUp_button()"
});
formatter.result({
  "duration": 3121362113,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 7171660,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.registrationPageDefinition.user_is_on_Login_Page(registrationPageDefinition.java:64)\r\n\tat ✽.Then User is on Login Page(./src/main/java/Features/FBUserRegistration.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2362962275,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"user4\" and \"user4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"user4@\" and \"user4123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"30\" and \"6\" and \"2000\"",
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
      "val": "user4",
      "offset": 39
    },
    {
      "val": "user4",
      "offset": 51
    }
  ],
  "location": "registrationPageDefinition.user_Enters_firstname_and_lastname_as_and(String,String)"
});
formatter.result({
  "duration": 20373780855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4@",
      "offset": 39
    },
    {
      "val": "user4123",
      "offset": 52
    }
  ],
  "location": "registrationPageDefinition.user_Enters_Email_and_new_password_as_and(String,String)"
});
formatter.result({
  "duration": 300293339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 38
    },
    {
      "val": "6",
      "offset": 47
    },
    {
      "val": "2000",
      "offset": 55
    }
  ],
  "location": "registrationPageDefinition.user_selects_birth_day_month_year_as_and_and(String,String,String)"
});
formatter.result({
  "duration": 404068409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 24
    }
  ],
  "location": "registrationPageDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 135360184,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_Clicks_on_SignUp_button()"
});
formatter.result({
  "duration": 3107037296,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 7110569,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.registrationPageDefinition.user_is_on_Login_Page(registrationPageDefinition.java:64)\r\n\tat ✽.Then User is on Login Page(./src/main/java/Features/FBUserRegistration.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2410744014,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Registration Form",
  "description": "",
  "id": "facebook-user-registration;user-registration-form;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Enters firstname and lastname as \"user5\" and \"user5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enters Email and new password as \"user5@\" and \"user5123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects birth day month year as \"21\" and \"8\" and \"1995\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user selects gender as \"Female\"",
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
      "val": "user5",
      "offset": 39
    },
    {
      "val": "user5",
      "offset": 51
    }
  ],
  "location": "registrationPageDefinition.user_Enters_firstname_and_lastname_as_and(String,String)"
});
formatter.result({
  "duration": 19385599222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user5@",
      "offset": 39
    },
    {
      "val": "user5123",
      "offset": 52
    }
  ],
  "location": "registrationPageDefinition.user_Enters_Email_and_new_password_as_and(String,String)"
});
formatter.result({
  "duration": 304572108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 38
    },
    {
      "val": "8",
      "offset": 47
    },
    {
      "val": "1995",
      "offset": 55
    }
  ],
  "location": "registrationPageDefinition.user_selects_birth_day_month_year_as_and_and(String,String,String)"
});
formatter.result({
  "duration": 327526375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "registrationPageDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 103916101,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_Clicks_on_SignUp_button()"
});
formatter.result({
  "duration": 3129108720,
  "status": "passed"
});
formatter.match({
  "location": "registrationPageDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 5707585,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.registrationPageDefinition.user_is_on_Login_Page(registrationPageDefinition.java:64)\r\n\tat ✽.Then User is on Login Page(./src/main/java/Features/FBUserRegistration.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2335306145,
  "status": "passed"
});
});