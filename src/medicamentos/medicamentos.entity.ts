import { Column, Entity, PrimaryColumn, ViewEntity } from "typeorm";

@ViewEntity('stg_siscovid_medicamentos')
export class MedicamentosEntity {

@Column()
tipo_documento_paciente:string;
@Column()
numero_documento:string;
@Column()
NombrePaciente:string;
@Column()
ApellidoPaternoPaciente:string;
@Column()
ApellidoMaternoPaciente:string;
@Column()
SexoPaciente:string;
@Column()
direccion:string;
@Column()
residencia_distrito:string;
@Column()
latitud:string;
@Column()
longitud:string;
@Column()
distrito:string;
@Column()
provincia:string;
@Column()
departamento:string;
@Column()
tipo_documento_personal:string;
@Column()
numero_documento_personal:string;
@Column()
NombrePersonal:string;
@Column()
ApellidoPaternoPersonal:string;
@Column()
ApellidoMaternoPersonal:string;
@Column()
ColegiaturaPersonal:string;
@Column()
nombre:string;
@Column()
renipres:string;
@Column()
diresa:string;
@Column()
cod_medicamento:string;
@Column()
medicamento:string;
@Column()
ff:string;
@Column()
presentacion:string;
@Column()
concentracion:string;
@Column()
diagnostico:string;
@Column()
frecuencia:number;
@Column()
dosis_unidad:string;
@Column()
tiempo:number;
@Column()
dosis_descripcion:string;
@Column()
observaciones:string;
@Column()
via:string;
@Column()
cantidad:number;
@Column()
entregado:number;
@Column()
estado_receta:string;
@Column()
estado_entrega:string;
@Column()
Fecha:Date;

}