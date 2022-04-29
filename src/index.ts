let usuarioRegistrado: string = "Juan";
let contrasenaRegistrada: string = "claveJuan";

let nombreUsuario: string | null = prompt("Ingrese su nombre de Usuario");
let contrasenaUsuario: string | null = prompt("ingrese su Contraseña");

if (
  usuarioRegistrado === nombreUsuario &&
  contrasenaRegistrada === contrasenaUsuario
) {
  console.log("usted ingreso Correctamente");
} else {
  console.log("Nombre Y/o Contraseña incorrectos");
}
