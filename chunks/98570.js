var r = n(115861),
    i = '\u200B',
    o = '\u180E';
e.exports = function () {
    return String.prototype.trim && i.trim() === i && o.trim() === o && ('_' + o).trim() === '_' + o && (o + '_').trim() === o + '_' ? String.prototype.trim : r;
};
