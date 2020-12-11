let fillSelect = function (selectElement, optionsArray) {
    let initialOption = document.createElement("option");
    initialOption.disabled = true;
    initialOption.selected = true;
    initialOption.value = null;
    initialOption.text = " -- Select an Option --"
    selectElement.add(initialOption);
    optionsArray.forEach((optionText) => {
        let option = document.createElement("option");
        option.text = optionText.name;
        option.value = optionText.id
        selectElement.add(option)
    }
    )
};

let emptySelect = function (selectElement) {
    let i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
};

let remapOptions = function (options, filterValue, attrName) {
    if (filterValue.length === 1)
        return options.filter(option => option[attrName] === filterValue[0]);
};

let handleChange = function (selectElement, event, optionsArray, filterAttr) {
    let IDs = [parseInt(event.target.value)];
    let newOptions = remapOptions(optionsArray, IDs, filterAttr);
    emptySelect(selectElement);
    fillSelect(selectElement, newOptions);
};

let resetSelect = function (selectElement, optionsArray) {
    emptySelect(selectElement);
    fillSelect(selectElement, optionsArray);
};