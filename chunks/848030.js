l.d(t, { A: () => n });
var n = {};
n = {
    select: "Select",
    selectAll: "Select All",
    sortable: "sortable column",
    ascending: "ascending",
    descending: "descending",
    ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
    descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
    columnSize: (e) => `${e.value} pixels`,
    resizerDescription: "Press Enter to start resizing",
};
