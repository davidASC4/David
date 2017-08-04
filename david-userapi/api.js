var randomuserURL= "https://randomuser.me/api/?results=5000";

$.ajax({
    url: randomuserURL,
    success: function(data) {
        console.log(data);
        var foodItem = data.hits[0];
        var name = foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + " calories!</h2>");
    }
});
