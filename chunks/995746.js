t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} a ${e.endDate}`,
    dateSelected: (e) => `${e.date} selecionado`,
    finishRangeSelectionPrompt: "Clique para concluir a sele\xe7\xe3o do intervalo de datas",
    maximumDate: "\xdaltima data dispon\xedvel",
    minimumDate: "Primeira data dispon\xedvel",
    next: "Pr\xf3ximo",
    previous: "Anterior",
    selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
    selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
    startRangeSelectionPrompt: "Clique para iniciar a sele\xe7\xe3o do intervalo de datas",
    todayDate: (e) => `Hoje, ${e.date}`,
    todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
};
