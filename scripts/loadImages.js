blankCell = new Image(16,16);
 blankCell.src = "images/blank.gif";

 faceSmile = new Image(26,26);
 faceSmile.src = "images/facesmile.gif";
 faceWait = new Image(26,26);
 faceWait.src = "images/faceclock.gif";

 borderlr = new Image(16,16);
 borderlr.src = "images/borderlr.gif"
 borderbl = new Image(16,16);
 borderbl.src = "images/borderbl.gif"
 borderbr = new Image(16,16);
 borderbr.src = "images/borderbr.gif"
 borderjointr = new Image(16,16);
 borderjointr.src = "images/borderjointr.gif"
 borderjointl = new Image(16,16);
 borderjointl.src = "images/borderjointl.gif"
 bordertb = new Image(16,16);
 bordertb.src = "images/bordertb.gif"
 bordertl = new Image(16,16);
 bordertl.src = "images/bordertl.gif"
 bordertr = new Image(16,16);
 bordertr.src = "images/bordertr.gif"

 timeDigits = new Array(10);
 for (l=0; l <= 9; l++) {
    timeDigits[l] = new Image(23,13);
    tstr = "images/time" + l + ".gif";
    timeDigits[l].src = tstr; }
 timeNeg = new Image(23,13);
 timeNeg.src = "images/time-.gif";

 cellOpenIm = new Array(9);
 for (l=0; l<=8; l++) {
    cellOpenIm[l] = new Image(16,16);
    tstr = "images/open" + l + ".gif";
    cellOpenIm[l].src = tstr; }

 menuNotChecked = new Image(10,10);
 menuNotChecked.src = "images/notchecked.gif";
 menuChecked = new Image(10,10);
 menuChecked.src = "images/checked.gif";

 bombFlagged = new Image(16,16);
 bombFlagged.src = "images/bombflagged.gif";
 bombRevealed = new Image(16,16);
 bombRevealed.src = "images/bombrevealed.gif";
 bombMisFlagged = new Image(16,16);
 bombMisFlagged.src = "images/bombmisflagged.gif";
 bombDeath = new Image(16,16);
 bombDeath.src = "images/bombdeath.gif";
 bombQuestion = new Image(16,16);
 bombQuestion.src = "images/bombquestion.gif";

 faceOoh = new Image(26,26);
 faceOoh.src = "images/faceooh.gif";
 faceDead = new Image(26,26);
 faceDead.src = "images/facedead.gif";
 faceWin = new Image(26,26);
 faceWin.src = "images/facewin.gif";
 facePirate = new Image(26,26);
 facePirate.src = "images/facepirate.gif";

 movesDigits0 = new Image(23,13);
 movesDigits0.src = "images/moves0.gif";
