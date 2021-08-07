/// <reference types="cypress" />

/** 
 * Untuk beberapa kondisi dibawah yang menggunakan username dan password yang sesuai,
 * saya tidak bisa melakukannya karena saya belum punya akses ke siakad polinema karena
 * saya mahasiswa alih jenjang
 * 
 * Untuk tes yang sebenarnya, Anda dapat mengganti value dari variabel-variabel dibawah
*/
const url = 'http://siakad.polinema.ac.id/';
const username = 'qwerty';
const password = 'qwerty';
const wrongUsername = 'qwerty';
const wrongPassword = 'qwerty';

describe("User Melakukan Login pada Website Siakad Polinema", () => {

    it("Login menggunakan password dan username yang salah", () => {
        cy.visit(url);
        cy.get('#username').type(wrongUsername);
        cy.get('#password').type(wrongPassword);
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User memasukkan password salah dan username benar", () => {
        cy.visit(url);
        cy.get('#username').type(username);
        cy.get('#password').type(wrongPassword);
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User memasukkan username salah dan password benar", () => {
        cy.visit(url);
        cy.get('#username').type(wrongPassword);
        cy.get('#password').type(password);
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User tidak memasukkan username dan password", () => {
        cy.visit(url);
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });

    it("User memasukkan username dan password yang benar", () => {
        cy.visit(url);
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('SELAMAT DATANG');
    });

    it("User memasukkan username dan mengosongi password", () => {
        cy.visit(url);
        cy.get('#username').type(username);
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi');
    });

    it("User memasukkan password dan mengosongi username", () => {
        cy.visit(url);
        cy.get('#username').clear();
        cy.get('#password').type(password);
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });
});
