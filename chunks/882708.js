var i,
    a,
    o = r(668530),
    s = r(204384),
    l = o.process,
    u = o.Deno,
    c = (l && l.versions) || (u && u.version),
    d = c && c.v8;
d && (a = (i = d.split('.'))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !a && s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (a = +i[1]), (e.exports = a);
