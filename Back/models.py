class Pedido:
    def __init__(self, forma, capas, bizcochuelo, relleno, cobertura, disenio):
        self.forma = forma
        self.capas = capas
        self.bizcochuelo = bizcochuelo
        self.relleno = relleno
        self.cobertura = cobertura
        self.disenio = disenio

    
    #Metodo para imprimir en string
    def __str__(self):
        return f"Forma: {self.forma}\nCapas: {self.capas}\n Tipo de bizcochuelo: {self.bizcochuelo}\n Relleno: {self.relleno}\n Cobertura:{self.cobertura}\n Diseño:{self.diseño}"

    def asignar_forma(self, forma):
        self.forma = forma

    
    def asignar_capas(self, capas):
        self.capas = capas


    def asignar_bizcochuelo(self, bizcochuelo):
        self.bizcochuelo = bizcochuelo
    

    def asignar_relleno(self, relleno):
        self.relleno= relleno
    

    def asignar_cobertura(self, cobertura):
        self.cobertura = cobertura
    

    def asignar_disenio(self, disenio):    
        self.disenio = disenio

    def obtener_forma(self):
        return self.forma

    def obtener_capas(self):
        return self.forma

    def obtener_bizcochuelo(self):
        return self.forma

    def obtener_relleno(self):
        return self.forma

    def obtener_cobertura(self):
        return self.forma

    def obtener_disenio(self):
        return self.forma
    

class ContactoCliente:
    def __init__(self, nombre, email, telefono, fecha_de_entrega):
        self.nombre = nombre
        self.email = email
        self.telefono = telefono
        self.fecha_de_entrega = fecha_de_entrega

    def __str__(self):
        return f"Nombre: {self.nombre}, Email: {self.email}, Telefono: {self.telefono}, Fecha de entrega: {self.fecha_de_entrega}"
    
    def obtener_nombre(self):
        return self.nombre
    
    def obtener_email(self):
        return self.email 
       
    def obtener_telefono(self):
        return self.telefono
    
    def obtener_fecha_de_entrega(self):
        return self.fecha_de_entrega
    
    def asignar_nombre(self, nombre):
        self.nombre = nombre

    def asignar_email(self, email):
        self.email = email

    def asignar_telefono(self, telefono):
        self.telefono = telefono

    def asignar_fecha_de_entrega(self, fecha_de_entrega):
        self.fecha_de_entrega = fecha_de_entrega

    
