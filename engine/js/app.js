var start = function(){

    var form = document.getElementById("movieForm");
    var list = document.getElementById("movieList");
    var movieNothing = document.getElementById("movieNothing");
    var removeButtons = document.getElementsByClassName("remove");

    // Catch the event when the user clicks "Save".
    form.addEventListener("submit", function (event) {

        // Prevent the data from being sent to the server.
        // Also prevents the page from being refreshed.
        event.preventDefault();
        movieNothing.remove("");

        // this.title and this.good are available because of the
        // name="title" and name="good" attributes in index.html
        var title = this.title.value;

        // Make a new list item with document.createElement()
        var li = document.createElement("li");
        li.className += "movie";


        // Set the contents of the li to be the movie title. Using
        // createTextNode() is the best solution we have.
        //
        var text = document.createElement("p");
        text.innerText = title;
        dis = text;

        var removeButton = document.createElement("span");
        removeButton.className += "remove";

        li.appendChild(text);
        li.appendChild(removeButton);

        // Merely creating the element does not add it to the page.
        // Make it visible on the page by using appendChild().
        list.appendChild(li);

        //Add event listener
        for (var i=0; i < removeButtons.length; i++) {
            addELToRemoveButton(removeButtons[i]);
        }

        // Clear out the previous title from the text field
        this.title.value = "";
    });
};

// Helper functions
function addELToRemoveButton(button) {
    button.addEventListener("click", function(){
        this.parentNode.remove("");
    });
}

