import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'
import server from '../server';

const expect = chai.expect;

describe('loginFunction()', function () {
  it('Test login', async function () {

    expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI").to.be.equal(
      await loginFunction("admin", "secret")
    );
  });

  it('Test login with an invalid credentials', async function () {

    expect(
      await loginFunction("admin", "wrong-password")
    ).to.be.equal(null);
  });
});

describe('protectFunction()', function () {
  it('Test protected', function () {

    expect("You are under protected data").to.be.equal(
      protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI")
    );
  });
  
  it('Test protected with an invalid jwt token', function () {

    expect(null).to.be.equal(
      protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    );
  });
});