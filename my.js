const Items = document.getElementById('items')

new Sortable(Items, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    swap: true,
	swapClass: 'highlight',
});