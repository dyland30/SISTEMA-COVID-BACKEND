import { Column, PrimaryColumn, Entity } from "typeorm";
@Entity('stg_siscovid_ficha_00')
export class Ficha00Entity {
    @PrimaryColumn()
    Codigo?:number;
    @Column()
    Tipo_Doc?:string;
    @Column()
    Nro_Doc?:string;
    @Column()
    Nombres?:string;
    @Column()
    Sexo?:string;
    @Column()
    Edad?:number;
    @Column()
    Pais_Natal?:string;
    @Column()
    Departamento?:string;
    @Column()
    Provincia?:string;
    @Column()
    Distrito?:string;
    @Column()
    Diris?:string;
    @Column()
    Direccion?:string;
    @Column()
    Correo?:string;
    @Column()
    Telefono?:string;
    @Column()
    Contacto_familiar?:string;
    @Column()
    Celular_del_contacto?:string;
    @Column()
    Contacto_persona_diagnostico_positivo?:string;
    @Column()
    Visita_pais_confirmado_covid?:string;
    @Column()
    Pais_visitado_1?:string;
    @Column()
    Fecha_visita_1?:string;
    @Column()
    Pais_visitado_2?:string;
    @Column()
    Fecha_visita_2?:string;
    @Column()
    Pais_visitado_3?:string;
    @Column()
    Fecha_visita_3?:string;
    @Column()
    Fecha_llegada_Peru?:string;
    @Column()
    Fiebre?:string;
    @Column()
    Tos?:string;
    @Column()
    Dolor_garganta?:string;
    @Column()
    Dificultad_respiratoria?:string;
    @Column()
    Congestion_nasal?:string;
    @Column()
    Fecha_inicio_sintomas?:string;
    @Column()
    Riesgo_adulto_mayor?:string;
    @Column()
    Riesgo_ninio?:string;
    @Column()
    Riesgo_gestante?:string;
    @Column()
    Riesgo_familiar?:string;
    @Column()
    Caso_valido?:string;
    @Column()
    Observaciones?:string;
    @Column()
    Paciente_contactado?:string;
    @Column()
    Muestra_tomada?:string;
    @Column()
    Fecha_muestra?:string;
    @Column()
    Resultado_entregado?:string;
    @Column()
    Fecha?:string;
    @Column()
    Estado?:string;
    @Column()
    Fecha_de_registro?:string;
    @Column()
    Dias_Resgistrado?:number;
    @Column()
    Procedencia?:string;
    @Column()
    Personal_Salud?:string;
    @Column()
    Obecidad?:string;
    @Column()
    Enfermedad_Pulmonar?:string;
    @Column()
    Diabetes?:string;
    @Column()
    Hipertension?:string;
    @Column()
    Inmunodepresion?:string;
    @Column()
    Cancer?:string;
    @Column()
    Gestante_Comorbilidad?:string;
    @Column()
    Mayor_65?:string;
    @Column()
    Prioridad?:number;
    @Column()
    tipo_seguro?:string;
    @Column()
    latitud?:string;
    @Column()
    longitud?:string;
    @Column()
    usuario?:string;
    @Column()
    nombre?:string;
    @Column()
    Procedencia_del_Usuario?:string;
    @Column()
    Cantidad?:number;
    @Column()
    tipo_prueba?:string;
    @Column()
    resultado?:string;
    @Column()
    fallecido?:string;
  
}
