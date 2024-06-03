// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItemBtn');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    // Function to add a new item
    function addItem() {
        const itemText = itemInput.value.trim();

        if (itemText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = itemText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function() {
                itemList.removeChild(li);
            });

            // Append the remove button to the list item
            li.appendChild(removeBtn);

            // Append the list item to the list
            itemList.appendChild(li);

            // Clear the input
            itemInput.value = '';
        } else {
            alert('Please enter an item.');
        }
    }

    // Add event listener to the button
    addItemBtn.addEventListener('click', addItem);

    // Allow pressing 'Enter' to add the item
    itemInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});