#!/bin/sh
cd assets/png/edge_tiles;
#pwd
zoom="2"
percent="00%"
x="x"
out_str=$zoom$x
zoom_percent=$zoom$percent
for f in *.png;
 do
  out=$out_str$f
  convert $f -scale $zoom_percent $out
  #echo $out

done
#pwd
#ls -al
cd ..
cd hud
for f in *.png;
 do
  out=$out_str$f
  convert $f -scale $zoom_percent $out
  #echo $out

done
cd ..
cd tiles
for f in *.png;
 do
  out=$out_str$f
  convert $f -scale $zoom_percent $out
  #echo $out

done
cd ..
cd buildings
for f in *.png;
 do
  out=$out_str$f
  convert $f -scale $zoom_percent $out
  #echo $out

done
