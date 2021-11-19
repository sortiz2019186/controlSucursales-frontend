export class ProductoSucursal {
  constructor(
    public _id: String,
    public nombreProducto: String,
    public stockExistente: Number,
    public cantidadVendida: Number
  ) {}
}
