$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("any-member_bookavtc.feature");
formatter.feature({
  "line": 1,
  "name": "Tout client - Réserver un VTC",
  "description": "\nUn client veut réserver un VTC de sorte à se déplacer d\u0027un point A à un point B.",
  "id": "tout-client---réserver-un-vtc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 23,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;1"
    },
    {
      "cells": [
        "Jean-Michel",
        "35",
        "5",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 24,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;2"
    },
    {
      "cells": [
        "Patrick",
        "46",
        "16",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 25,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;3"
    },
    {
      "cells": [
        "Michael",
        "30",
        "0",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 26,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;4"
    },
    {
      "cells": [
        "Michael",
        "50",
        "10",
        "10",
        "0",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 27,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;5"
    },
    {
      "cells": [
        "Michael",
        "50",
        "50",
        "10",
        "10",
        "Vincent",
        "111 avenue Victor Hugo, 93300 Aubervilliers",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 28,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 98670554,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 563493,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"Jean-Michel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"35\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"5\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Jean-Michel",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 8028227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 944351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "43 rue Archereau 75019 Paris",
      "offset": 39
    },
    {
      "val": "2 rue Clisson 75013 Paris",
      "offset": 72
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 2308966,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:39"
});
formatter.result({
  "duration": 89964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 82508,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 117303,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 84877,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"Patrick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"46\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"16\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Patrick",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 117043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "46",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 132372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "5 rue Clisson 75013 Paris",
      "offset": 39
    },
    {
      "val": "21 rue Laffitte 75009 Paris",
      "offset": 69
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 289308,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:39"
});
formatter.result({
  "duration": 509086,
  "error_message": "java.lang.AssertionError: expected:\u003cBooking{customer\u003dCustomer{id\u003d\u0027ghi\u0027, firstName\u003d\u0027Patrick\u0027, lastName\u003d\u0027THOMAS\u0027}, vtc\u003dVTC{id\u003d\u0027abc\u0027, firstName\u003d\u0027Marc\u0027, lastName\u003d\u0027DUPUIS\u0027}, startPoint\u003d\u00275 rue Clisson 75013 Paris\u0027, destinationPoint\u003d\u002721 rue Laffitte 75009 Paris\u0027}\u003e but was:\u003cBooking{customer\u003dCustomer{id\u003d\u0027def\u0027, firstName\u003d\u0027Jean-Michel\u0027, lastName\u003d\u0027DUPONT\u0027}, vtc\u003dVTC{id\u003d\u0027abc\u0027, firstName\u003d\u0027Marc\u0027, lastName\u003d\u0027DUPUIS\u0027}, startPoint\u003d\u00275 rue Clisson 75013 Paris\u0027, destinationPoint\u003d\u002721 rue Laffitte 75009 Paris\u0027}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat acceptance.BookingSteps.lambda$new$3(BookingSteps.java:42)\n\tat ✽.Then la réservation est effective(any-member_bookavtc.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 126031,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 99126,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"30\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 436327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 452961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "136 avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 80
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 155689,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:39"
});
formatter.result({
  "duration": 320293,
  "error_message": "java.lang.AssertionError: expected:\u003cBooking{customer\u003dCustomer{id\u003d\u0027abc\u0027, firstName\u003d\u0027Michael\u0027, lastName\u003d\u0027AZERHAD\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u0027136 avenue de Flandre 75019 Paris\u0027, destinationPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027}\u003e but was:\u003cBooking{customer\u003dCustomer{id\u003d\u0027def\u0027, firstName\u003d\u0027Jean-Michel\u0027, lastName\u003d\u0027DUPONT\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u0027136 avenue de Flandre 75019 Paris\u0027, destinationPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat acceptance.BookingSteps.lambda$new$3(BookingSteps.java:42)\n\tat ✽.Then la réservation est effective(any-member_bookavtc.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 104302,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 82484,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"10\" euros TTC avec \"0\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 71625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 61674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "111 avenue Victor Hugo, 93300 Aubervilliers",
      "offset": 78
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 98660,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:39"
});
formatter.result({
  "duration": 167877,
  "error_message": "java.lang.AssertionError: expected:\u003cBooking{customer\u003dCustomer{id\u003d\u0027abc\u0027, firstName\u003d\u0027Michael\u0027, lastName\u003d\u0027AZERHAD\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027, destinationPoint\u003d\u0027111 avenue Victor Hugo, 93300 Aubervilliers\u0027}\u003e but was:\u003cBooking{customer\u003dCustomer{id\u003d\u0027def\u0027, firstName\u003d\u0027Jean-Michel\u0027, lastName\u003d\u0027DUPONT\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027, destinationPoint\u003d\u0027111 avenue Victor Hugo, 93300 Aubervilliers\u0027}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat acceptance.BookingSteps.lambda$new$3(BookingSteps.java:42)\n\tat ✽.Then la réservation est effective(any-member_bookavtc.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    },
    {
      "val": "0",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 134310,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 177107,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"Vincent\" de \"111 avenue Victor Hugo, 93300 Aubervilliers\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 90272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 59190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "111 avenue Victor Hugo, 93300 Aubervilliers",
      "offset": 42
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 90
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 169353,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:39"
});
formatter.result({
  "duration": 168363,
  "error_message": "java.lang.AssertionError: expected:\u003cBooking{customer\u003dCustomer{id\u003d\u0027abc\u0027, firstName\u003d\u0027Michael\u0027, lastName\u003d\u0027AZERHAD\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u0027111 avenue Victor Hugo, 93300 Aubervilliers\u0027, destinationPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027}\u003e but was:\u003cBooking{customer\u003dCustomer{id\u003d\u0027def\u0027, firstName\u003d\u0027Jean-Michel\u0027, lastName\u003d\u0027DUPONT\u0027}, vtc\u003dVTC{id\u003d\u0027def\u0027, firstName\u003d\u0027Vincent\u0027, lastName\u003d\u0027RONNI\u0027}, startPoint\u003d\u0027111 avenue Victor Hugo, 93300 Aubervilliers\u0027, destinationPoint\u003d\u00272 Avenue de Flandre 75019 Paris\u0027}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat acceptance.BookingSteps.lambda$new$3(BookingSteps.java:42)\n\tat ✽.Then la réservation est effective(any-member_bookavtc.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 38,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;1"
    },
    {
      "cells": [
        "Jean-Michel",
        "0",
        "0",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 39,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;2"
    },
    {
      "cells": [
        "Patrick",
        "26",
        "26",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 40,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;3"
    },
    {
      "cells": [
        "Michael",
        "29",
        "29",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 41,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;4"
    },
    {
      "cells": [
        "Michael",
        "20",
        "20",
        "15",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 42,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;5"
    },
    {
      "cells": [
        "Michael",
        "2",
        "2",
        "10",
        "10",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 43,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 124935,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 73096,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"Jean-Michel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Jean-Michel",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 127855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 65185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "43 rue Archereau 75019 Paris",
      "offset": 39
    },
    {
      "val": "2 rue Clisson 75013 Paris",
      "offset": 72
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 91118,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "duration": 1038334,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:47)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:49"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 86004,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 83837,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"Patrick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"26\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"26\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Patrick",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 87310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 55639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "5 rue Clisson 75013 Paris",
      "offset": 39
    },
    {
      "val": "21 rue Laffitte 75009 Paris",
      "offset": 69
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 148301,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "duration": 147436,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:47)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:49"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 108453,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 59113,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"29\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"29\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 81964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 153714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "136 avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 80
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 262921,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "duration": 346779,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:47)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:49"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 67971,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 42715,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"20\" euros TTC avec \"15\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"20\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 104553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "15",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 85589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "136 avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 80
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 189265,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "duration": 168561,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:47)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:49"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 117647,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 61027,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "le solde de mon compte est de \"2\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "le solde de mon compte est de \"2\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 33
    }
  ],
  "location": "UserSteps.java:18"
});
formatter.result({
  "duration": 120639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 86855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "111 avenue Victor Hugo, 93300 Aubervilliers",
      "offset": 78
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "duration": 140028,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "duration": 222170,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:47)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:49"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;",
  "rows": [
    {
      "cells": [
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 52,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;1"
    },
    {
      "cells": [
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 53,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;2"
    },
    {
      "cells": [
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 54,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;3"
    },
    {
      "cells": [
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 55,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 181419,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 110503,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 243768,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:47)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "43 rue Archereau 75019 Paris",
      "offset": 39
    },
    {
      "val": "2 rue Clisson 75013 Paris",
      "offset": 72
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:52"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 152017,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 156327,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 258503,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:47)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Marc",
      "offset": 29
    },
    {
      "val": "5 rue Clisson 75013 Paris",
      "offset": 39
    },
    {
      "val": "21 rue Laffitte 75009 Paris",
      "offset": 69
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:52"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ],
      "line": 12
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ],
      "line": 13
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.java:14"
});
formatter.result({
  "duration": 94683,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 60351,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 151233,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:47)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Vincent",
      "offset": 29
    },
    {
      "val": "136 avenue de Flandre 75019 Paris",
      "offset": 42
    },
    {
      "val": "2 Avenue de Flandre 75019 Paris",
      "offset": 80
    }
  ],
  "location": "BookingSteps.java:28"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:52"
});
formatter.result({
  "status": "skipped"
});
});