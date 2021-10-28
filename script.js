/*
    Assignment 5
    {Abbey Roy}
*/

$(document).ready(function(){
    // ContentCard class
    class ContentCard {
        // class properties
        id;
        title;
        description;
        category;

        // constructor
        constructor (id, title, description, category) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
        }

        // updateContent method
        updateContent (title, description, category) {
            if (title) {
                this.title = title;
            }
            if (description) {
                this.description = description;
            }
            if (category) {
                this.category = category;
            }
        }

        // toString method
        toString () {
            return `<div id="content-${this.id}"><h4>${this.title}</h4><p>${this.description}</p><div class="category">${this.category}</div></div>`;
        }
    }

    // array of Dragon Age character content cards
    let contentArr = [
        new ContentCard(0, "Varric Tethras", "A charming dwarven storyteller from Kirkwall.", "Rogue"),
        new ContentCard(1, "Cassandra Pentaghast", "A Nevarran Seeker of Truth and the right hand of Divine Justinia.", "Warrior"),
        new ContentCard(2, "Dorian Pavus", "A fabulous necromancer from the Tevinter Imperium.", "Mage"),
        new ContentCard(3, "Cole", "A spirit of Compassion who has taken human form.", "Rogue"),
        new ContentCard(4, "Solas", "An elven apostate with a vast knowledge of the fade.", "Mage")
    ];

    // forEach looping through the array of content cards
    contentArr.forEach(ContentCard => {
        $("#content-list").append(ContentCard.toString());
    });
});


