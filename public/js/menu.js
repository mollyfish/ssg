'use strict';

$(function(){

function when_tab() {
  document.getElementById("drop_tab_when").className="real_box";  
  document.getElementById("drop_tab_where").className="ghost_box";
  document.getElementById("drop_tab_what").className="ghost_box"; 

  document.getElementById("main_tab_when").className="current_tab";
  document.getElementById("main_tab_where").className="sleeping_tab";
  document.getElementById("main_tab_what").className="sleeping_tab";


  document.getElementById("drop_tab_when").innerHTML="<a href='jan.php'>January</a> "+" <a href='feb.php'>February</a> "+" <a href='mar.php'>March</a> "+" <a href='apr.php'>April</a> "+" <a href='may.php'>May</a> "+" <a href='jun.php'>June</a> "+" <a href='jul.php'>July</a> "+" <a href='aug.php'>August</a> "+" <a href='sep.php'>September</a> "+" <a href='oct.php'>October</a> "+" <a href='nov.php'>November</a> "+" <a href='dec.php'>December</a> ";
}

function where_tab() {
  document.getElementById("drop_tab_where").className="real_box"; 
  document.getElementById("drop_tab_when").className="ghost_box";
  document.getElementById("drop_tab_what").className="ghost_box"; 

  document.getElementById("main_tab_where").className="current_tab";
  document.getElementById("main_tab_when").className="sleeping_tab";
  document.getElementById("main_tab_what").className="sleeping_tab";

  document.getElementById("drop_tab_where").innerHTML="<a href='salish_sea.php'>Salish Sea</a> "+" <a href='olympic_pen.php'>Olympic Peninsula</a> "+" <a href='southwest_WA.php'>Southwest WA</a> "+" <a href='N_cascades.php'>North Cascades</a> "+" <a href='interstate_90.php'>I-90 Corridor</a> "+" <a href='S_cascades.php'>South Cascades</a> "+" <a href='eastern_WA.php'>Eastern WA</a> ";
}

function what_tab() {
  document.getElementById("drop_tab_what").className="real_box";  
  document.getElementById("drop_tab_when").className="ghost_box"; 
  document.getElementById("drop_tab_where").className="ghost_box";  

  document.getElementById("main_tab_what").className="current_tab";
  document.getElementById("main_tab_when").className="sleeping_tab";
  document.getElementById("main_tab_where").className="sleeping_tab";

  document.getElementById("drop_tab_what").innerHTML="<a href='kids.php'>For Kids</a> "+" <a href='birds.php'>Birds</a> "+" <a href='mammals.php'>Mammals</a> "+" <a href='plants.php'>Plants</a> "+" <a href='fish.php'>Fish</a> "+" <a href='reptiles_and_more.php'>Reptiles <span class='ampersand'>&</span> More</a> "+" <a href='insects_and_more.php'>Insects <span class='ampersand'>&</span> More</a> "+" <a href='tidepools_and_beyond.php'>Tidepools <span class='ampersand'>&</span> Beyond</a> "+" <a href='earth.php'>Earth <span class='ampersand'>&</span> Sky</a> ";
}
});