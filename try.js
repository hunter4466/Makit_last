const checkbody = (body) => {
  const acceptedkeys = ['name', 'lastname', 'birthdate', 'auth', 'foodpref'];
  const keys = Object.keys(body);
  let validation = true;
  const errortypes = [];
  const errorcoll = [];
  keys.forEach((e) => {
    if (!acceptedkeys.includes(e)) {
      errortypes.push(e, ', ');
      validation = false;
    }
  });
  if (!validation) {
    errorcoll.push(`${errortypes.reduce((a, b) => a + b)} is/are not valid entry/entries.`);
  }
  if (keys.includes('birthdate')) {
    const dateval = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(body.birthdate);
    if (!dateval) {
      validation = false;
      errorcoll.push(`${body.birthdate} is not a valid date, date must be in the following format YYYY-MM-DD`);
    }
  }
  if (keys.includes('auth')) {
    const authval = (body.auth === 'true' || body.auth === 'false');
    if (!authval) {
      validation = false;
      errorcoll.push(`${body.auth} is not a valid auth value, auth must be true or false (boolean)`);
    }
  }
  if (!validation) {
    const returnobj = {};
    let count = 1;
    errorcoll.forEach((e) => {
      returnobj[`Error ${count}`] = e;
      count += 1;
    });
    return { check: false, errors: returnobj };
  }
  const body2 = body;
  if (body2.auth === 'true') {
    body2.auth = 1;
  } else if (body2.auth === 'false') {
    body2.auth = 0;
  }
  return { check: true, values: body2 };
};

const cases = {
  name: 'Mario', lastname: 'Chois', birthdate: '1989-12-29', auth: 'bno', foodpref: 'ceviche',
};

console.log(checkbody(cases));
