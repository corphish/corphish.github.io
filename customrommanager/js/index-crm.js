$.getJSON("https://bitbucket.org/corphish/crm_store/raw/master/map.json", function(data){
    makeTable(data);
});

var version;

function makeTable(data) {
    var tableBody = "";
    data["allVariants"].forEach(function(entry) {
        tableBody += "<tr>";
        tableBody += "<td class=\"mdl-data-table__cell--non-numeric\"><a href=\"https://bitbucket.org/corphish/crm_store/raw/master/apks/" + entry["apkName"] + "\">" + entry["apkName"] + "</td>";
        tableBody += "<td class=\"mdl-data-table__cell--non-numeric\">" + entry["currentVersionName"] + "</td>";
        tableBody += "<td>" + entry["currentVersionCode"] + "</td>";
        tableBody += "<td class=\"mdl-data-table__cell--non-numeric\">" + entry["lastUpdated"] + "</td>";
        tableBody += "<td>" + entry["size"] + "</td>";
        tableBody += "</tr>"
        version = entry["currentVersionName"];
    });
    $(".download-table-body").html(tableBody);
}

function initHelperDownloadButton() {
    $(".helper-download").on("click", function() {
        window.open("https://bitbucket.org/corphish/crm_store/raw/master/apks/" +
            "custom-rom-manager-" + version + "-free-" +
            $("input[name=release-options]:checked").val() + "-" +
            $("input[name=android-options]:checked").val() + "-" +
            $("input[name=platform-options]:checked").val() +
            ".apk"
        );
    });
}

initHelperDownloadButton();
