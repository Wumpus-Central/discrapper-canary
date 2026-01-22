n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} a ${e.endDate}`,
    dateSelected: (e) => `${e.date} selecionado`,
    finishRangeSelectionPrompt: "Clique para concluir a seleção do intervalo de datas",
    maximumDate: "Última data disponível",
    minimumDate: "Primeira data disponível",
    next: "Próximo",
    previous: "Anterior",
    selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
    selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
    startRangeSelectionPrompt: "Clique para iniciar a seleção do intervalo de datas",
    todayDate: (e) => `Hoje, ${e.date}`,
    todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
};
