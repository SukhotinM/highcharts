try {
    Package.describe({
        summary: "Highcharts.com charts"
    });

    Package.on_use(function (api) {
        api.use('jquery', 'client');
        //api.add_files('highcharts.js','client');
        //api.add_files('highcharts-more.js','client');
        api.add_files('highcharts.src.js','client');
        api.add_files('highcharts-more.src.js','client');


        //api.export ('Highcharts','client');

    });
}
catch (err) {
    console.log("Error while trying to load a package: " + err.message);
};
