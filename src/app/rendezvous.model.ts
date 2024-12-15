export interface Rendezvous {
  id: number;
  clientId: number;
  disponibilityId: number;
  status: string;
}
export interface RendezvousInitialize {
  clientId: number;
  disponibilityId: number;
}
export interface DisponibilityInitialize {
  time: string;
  date: string;
  price: number;
  professionalId: number;
}
export interface DisponibilityItem {
    id: number;
    time: string;
    date: string;
    price: number;
    professionalId: number;
  };
export interface Disponibility {
  disponibility: {
    id: number;
    time: string;
    date: string;
    price: number;
    professionalId: number;
  };
  user: {
    id: number;
    name: string;
    email: string;
    dateNaissance: string;
    phoneNumber: string;
    role: string;
    profession: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  dateNaissance: string;
  phoneNumber: string;
  role: string;
  profession: string;
}

export class RendezvousWithUserWithDisponibility {
  constructor(
    public rendezvous: Rendezvous,
    public user: User,
    public disponibility: Disponibility
  ) {}
}

