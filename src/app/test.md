{panel:title=Requirements/Acceptance Tests|titleBGColor=#ffcc00}

There are specific requirements for displaying restaurants to the guest or not whether there is inventory/block setup/available or not.  To try make sense of these different requirements and scenarios that we need to cover I have created the below take which should help solve some of the issues we are seeing.

|| Scenario || Block Built || Block Open  || Inventory Available || Already Booked Dining || HAL || SBN || HAL WebDev Test Data || SBN WebDev Test Data || Voyage Details || Logic for *SBN* ||
| 1 | N | NA | NA  | NA  | *Show* dining tab in navigation, display red message  | *Do not show* dining tab in navigation  | VV5LVP / JACKSON   | CL6LHJ / PETERSEN | 4659 | NA |
| 2 | Y | N | NA  | NA  | *Show* dining tab in navigation, display red message  | *Do not show* dining tab in navigation  | VV5LVP / JACKSON     | CL6LHJ / PETERSEN   | 4659 | NA |
| 3 | Y | Y | N  | NA  | *Show* dining tab in navigation, display red message  | *Show* dining tab in navigation and tile with "Request onboard" button  | VV5LVQ / Donald   | CL6LHR / DOENGES | 4719 | *IF* "isAvailable": false
*THEN* button state = "Request Onboard" |
| 4 | Y | Y | Y  | N  | *Show* dining tab in navigation & tile as bookable  | *Show* dining tab in navigation & tile as bookable with "Request Now" button | VDDP2D / HOWLAND | CL6LHK / NILSSON LUNDSTED  | 5610 | *IF* "okToBook": true,
*AND* "isAvailable": true
*THEN* button state = "Request Now" |
| 5 | Y | Y | Y  | Y  | *Show* dining tab in navigation & tile as bookable  | *Show* dining tab in navigation & tile with "Already Requested" button  | VDDP2D / HOWLAND  | CL6LHL / JOHNSON (clean booking, make a purchase against it to create this scenario)  | 5610 | *IF* "okToBook": false,
*THEN* button state = "Already Requested" |


_______________________________
*Seabourn Button Logic* (there is no change to HAL functionality).

*IF* "okToBook": true,
*AND* "isAvailable": true
*THEN* button state = "Request Now"

*IF* "okToBook": false,
*AND* "isAvailable": true
*THEN* button state = "Already Requested"

*IF* "isAvailable": false
*THEN* button state = "Request Onboard"


{panel}
