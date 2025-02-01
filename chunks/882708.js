var i,
    r,
    a = n(668530),
    s = n(204384),
    o = a.process,
    l = a.Deno,
    u = (o && o.versions) || (l && l.version),
    c = u && u.v8;
c && (r = (i = c.split('.'))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !r && s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (r = +i[1]), (e.exports = r);
