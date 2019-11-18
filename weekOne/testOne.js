var path = new Path();
path.strokeColor= new Color(0,0,255);
// path.strokeWidth = 0.001;
path.add(new Point(320,135));
path.add(new Point(165,135));
path.add(new Point(150,150));
path.add(new Point(200,200));
path.add(new Point(150,250));
path.add(new Point(200,300));
path.add(new Point(150,350));
path.add(new Point(200,400));
path.add(new Point(150,450));
path.add(new Point(200,500));
path.add(new Point(150,550));
path.add(new Point(100,550));
path.add(new Point(150,500));
path.add(new Point(100,450));
path.add(new Point(150,400));
path.add(new Point(100,350));
path.add(new Point(150,300));
path.add(new Point(100,250));
path.add(new Point(150,200));
path.add(new Point(100,150));
path.add(new Point(150,100));
path.add(new Point(750,100));
path.add(new Point(800,150));
path.add(new Point(750,200));
path.add(new Point(800,250));
path.add(new Point(750,300));
path.add(new Point(800,350));
path.add(new Point(750,400));
path.add(new Point(800,450));
path.add(new Point(750,500));
path.add(new Point(800,550));
path.add(new Point(750,550));
path.add(new Point(700,500));
path.add(new Point(750,450));
path.add(new Point(700,400));
path.add(new Point(750,350));
path.add(new Point(700,300));
path.add(new Point(750,250));
path.add(new Point(700,200));
path.add(new Point(750,150));
path.add(new Point(735,135));
path.add(new Point(580,135));
path.closed = true;
path.smooth();

var ring = new Path();
ring.strokeColor= new Color(0,0,255);
ring.add(new Point(340,250));
ring.add(new Point(300,350));
ring.add(new Point(400,500));
ring.add(new Point(370,500));
ring.add(new Point(270,350));
ring.add(new Point(320,220));
ring.add(new Point(580,220));
ring.add(new Point(630,350));
ring.add(new Point(530,500));
ring.add(new Point(500,500));
ring.add(new Point(600,350));
ring.add(new Point(560,250));

ring.closed = true;
ring.smooth();


function onMouseDown() {
    downloadAsSVG("cutFile");
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "output.svg";

    // create a data url of the file
    var svgData = project.exportSVG({
        asString: true
    });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}