describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should display login page correctly', () => {
 
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
       // klik tombol login tanpa mengisi username
       cy.get('button').contains(/^Masuk$/).click();
 
       // memverifikasi window.alert untuk menampilkan pesan dari API
       cy.on('window:alert', (str) => {
         expect(str).to.equal('"email" is not allowed to be empty');
       });
  });
  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
 
    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Masuk$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
 
    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password');
 
    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('fajar@gmail.com');
 
    // mengisi password
    cy.get('input[placeholder="Password"]').type('test123');
 
    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();
 
    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').contains(/^FORUM DISCUSSION$/).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});