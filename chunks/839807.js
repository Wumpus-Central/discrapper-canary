"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
    longPressToSelect: "Mantenha pressionado para entrar no modo de sele\xe7\xe3o.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nenhum item selecionado", one: () => `${t.number(e.count)} item selecionado`, other: () => `${t.number(e.count)} itens selecionados` })}.`,
    selectedItem: (e) => `${e.item} selecionado.`,
};
