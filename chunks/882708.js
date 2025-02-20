var r,
    i,
    o = n(668530),
    a = n(204384),
    s = o.process,
    l = o.Deno,
    c = (s && s.versions) || (l && l.version),
    u = c && c.v8;
u && (i = (r = u.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]), (e.exports = i);
