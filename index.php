<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/styles/style.css">
    <title>Currency Converter</title>
</head>

<body>

    <div class="wrapper">
        <div class="row">
            
            <input name="amount" class="amount" type="text" type="number" value="1" pattern="[0-9]">

            <select name="curFrom" class="curFrom">
                <option>EUR</option>
            </select>
        </div>
        <div class="row">
            <div class="curResult">Waiting...</div>
            <select name="curTo" class="curTo">
                <option>Select</option>
            </select>
        </div>
    </div>

    <script src="/scripts/script.js"></script>
</body>