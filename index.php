<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>IDE</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="ide">

    </div>
    <script src="Libraries/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="Libraries/jsTree/jstree.min.js"></script>
    <script src="Libraries/ace/ace.js"></script>
    <script src="main.js" type="text/javascript"></script>
    <script type="text/javascript">
        var currentIde = new ide($("#ide"));
    </script>
</body>
</html>