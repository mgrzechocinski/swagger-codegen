exports.models = {
  "HomeScreenParams": {
  "id" : "HomeScreenParams",
  "name" : "",
  "properties" : {
    "token" : {
      "type" : "string",
      "description" : "User authentication token"
    }
  }
},

  "HomeScreenResponse": {
  "id" : "HomeScreenResponse",
  "name" : "",
  "properties" : {
    "piggybanks" : {
      "type" : "array",
      "items" : {
        "$ref" : "PiggyBank"
      }
    },
    "freeSavings" : {
      "type" : "string",
      "description" : "Amount of free savings - test"
    },
    "totalSavings" : {
      "type" : "string",
      "description" : "Total amount of savings"
    }
  }
},

  "PiggyBank": {
  "id" : "PiggyBank",
  "name" : "",
  "properties" : {
    "name" : {
      "type" : "string",
      "description" : "Piggybank name"
    },
    "avatar" : {
      "type" : "string",
      "description" : "Piggybank avatar id {0,1,2...}. Concat it with 'ic_*_piggy_'"
    },
    "amount" : {
      "type" : "string",
      "description" : "Current amount of savings in this piggybank"
    },
    "id" : {
      "type" : "string",
      "description" : "Piggy reference number to retrieve details"
    },
    "progress" : {
      "type" : "string",
      "description" : "Piggybank progress range: <0;100>"
    },
    "expectedAmount" : {
      "type" : "string",
      "description" : "Expected amount of savings in this piggybank"
    }
  }
}

  }
