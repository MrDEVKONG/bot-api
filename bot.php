<?php 

header("Content-type: text/plain; charset=utf=8;");

if ($_GET["meme"] == null) {
	echo "Hejsan!";
} else {
	$memes = ["Thanks Obama!","9+10=21","5/7 perfekt score!","Datanom is memes", "Kongo", "Nikelback", "Are U A Wizard?", "POO", "Cat videos are 'CENCURED'!", "<img src=\"img/download.jpeg\">", "<img src=\"img/download1.jpeg\">", "<img src=\"img/images.jpeg\">", "<img src=\"img/images1.jpeg\">"];
	echo $memes[random_int(0, count($memes) - 1)];
}

?>

