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
        "51",
        "1",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 28,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;6"
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
      "line": 29,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;7"
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
  "duration": 310725960,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 3648115,
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
  "duration": 35057024,
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
  "duration": 3589394,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 9789375,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 197169,
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
  "duration": 340902,
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
  "duration": 160128,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 223961,
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
  "duration": 337319,
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
  "duration": 360791,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 432039,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 125960,
  "status": "passed"
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
  "duration": 240814,
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
  "duration": 293671,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 134625,
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
  "duration": 341467,
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
  "duration": 281360,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 234966,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 31891,
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
  "duration": 150455,
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
  "duration": 348677,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 416736,
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
  "duration": 235464,
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
  "duration": 165821,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 635853,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 66159,
  "status": "passed"
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
  "duration": 245527,
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
  "duration": 251812,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 265270,
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
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"51\" euros TTC d\u0027avoir",
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
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"1\" euros TTC d\u0027avoir",
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
  "duration": 282033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "51",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 294603,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 2654737,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 148324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "CustomerAccountSteps.java:17"
});
formatter.result({
  "duration": 2277497,
  "error_message": "java.lang.AssertionError: expected:\u003cCustomerAccount{customerId\u003d\u0027abc\u0027, balance\u003d50, creditNote\u003d1}\u003e but was:\u003cCustomerAccount{customerId\u003d\u0027abc\u0027, balance\u003d51, creditNote\u003d0}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat acceptance.CustomerAccountSteps.lambda$null$0(CustomerAccountSteps.java:27)\n\tat ✽.And le solde de mon compte est de \"50\" euros TTC avec \"1\" euros TTC d\u0027avoir(any-member_bookavtc.feature:21)\n",
  "status": "failed"
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
  "duration": 194034,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 181257,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;;7",
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
  "duration": 198956,
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
  "duration": 139993,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 892950,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:40"
});
formatter.result({
  "duration": 102042,
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
  "duration": 210885,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
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
      "line": 39,
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
      "line": 40,
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
      "line": 41,
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
      "line": 42,
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
      "line": 43,
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
      "line": 44,
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
  "duration": 273690,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 182392,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"Jean-Michel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 213108,
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
  "duration": 476800,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 374170,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "duration": 3512979,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:48)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:50"
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
  "duration": 191565,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 158917,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"Patrick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"26\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 585793,
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
  "duration": 944890,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 399115,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "duration": 333899,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:48)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:50"
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
  "duration": 304880,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 382065,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"29\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 189652,
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
  "duration": 175267,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 299125,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "duration": 302882,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:48)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:50"
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
  "duration": 295681,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 292660,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"20\" euros TTC avec \"15\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 369017,
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
  "duration": 186783,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 362046,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "duration": 334288,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:48)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:50"
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
  "duration": 148124,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 237464,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"Michael\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"2\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 440240,
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
  "duration": 304060,
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "duration": 415162,
  "status": "passed"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "duration": 635690,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.lambda$new$4(BookingSteps.java:48)\n\tat ✽.Then la réservation n\u0027est pas effective(any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "location": "BookingSteps.java:50"
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
  "line": 47,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
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
      "line": 53,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;1"
    },
    {
      "cells": [
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 54,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;2"
    },
    {
      "cells": [
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 55,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;3"
    },
    {
      "cells": [
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 56,
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
  "duration": 172862,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 980961,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 742595,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:48)\n",
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:53"
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
  "duration": 134298,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 171647,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 730725,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:48)\n",
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:53"
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
  "duration": 312646,
  "status": "passed"
});
formatter.match({
  "location": "VTCSteps.java:14"
});
formatter.result({
  "duration": 263365,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.java:25"
});
formatter.result({
  "duration": 849219,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.lambda$new$2(UserSteps.java:27)\n\tat ✽.Given je ne suis pas authentifié(any-member_bookavtc.feature:48)\n",
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
  "location": "BookingSteps.java:29"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:47"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingSteps.java:53"
});
formatter.result({
  "status": "skipped"
});
});