"use client";
import * as React from "react";
import { Truck, Info, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const [isSending, setIsSending] = React.useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      alert("Veuillez confirmer que vous n'êtes pas un robot.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_3a1btrf",
        "template_n48buad",
        formRef.current!,
        "EL32gjbcAStDwEVBg",
      )
      .then(
        () => {
          alert("Demande envoyée avec succès ! Nous vous répondrons sous 24h.");
          formRef.current?.reset();
          recaptchaRef.current?.reset();
        },
        (error) => {
          alert("Une erreur est survenue, veuillez réessayer.");
          console.log(error.text);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <>
      <h2 className="text-3xl lg:text-6xl font-bold text-center mb-8 text-gray-300 mt-20 max-w-5xl mx-auto">
        Obtenez une estimation <span className="text-green-500">GRATUITE</span>{" "}
        de votre déménagement.
      </h2>
      <div className="flex flex-col max-w-5xl mx-auto gap-5 rounded-3xl bg-gray-900/40 backdrop-blur-xl p-6 md:p-10 border border-gray-800 shadow-2xl">
        <div className="bg-green-500/20 opacity-90 p-5 text-gray-300 text-sm border border-green-500/50 rounded-xl space-y-3 h-full">
          <h3 className="text-xl text-white">VOUS prenez en charge :</h3>
          <p>
            ¤ Débranchement du câblage des appareils le nécessitant (machine à
            laver, hi-fi, informatique…)
          </p>
          <p>
            ¤ Dépose des objets et meubles fixés au murs, planchers, plafonds…
          </p>
          <p>¤ Emballage et déballage des objets fragiles et non fragiles</p>
          <p>¤ Prise en charge du mobilier à démonter et remonter</p>
          <p>¤ Éventuellement descente de toutes vos affaires au RDC</p>
        </div>
        <div className="bg-green-500/20 opacity-90 p-5 text-gray-300 text-sm border border-green-500/50 rounded-xl space-y-3">
          <h3 className="text-xl text-white">NOUS prenons en charge :</h3>
          <p>¤ Protection de votre mobilier</p>
          <p>¤ Chargement, transport et déchargement du gros mobilier</p>
          <p>
            ¤ Assurance pour une valeur globale jusque 15000 € ou plus si
            besoin.
          </p>
          <p>
            ¤ Éventuellement descente de toutes vos affaires au Rez de chaussée
          </p>
          <p>¤ Groupage possible sur tous les déménagements</p>
        </div>
      </div>
      <div className="lg:max-w-5xl max-w-sm mx-auto bg-gray-900/40 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-gray-800 shadow-2xl my-20">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-green-500 font-bold text-xl uppercase tracking-wider">
              <div className="w-8 h-1 bg-green-500 rounded-full" /> Au Départ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm text-gray-400 font-medium">
                  Adresse complète (Code postal et Ville)
                </Label>
                <Input
                  name="from_address"
                  type="text"
                  className="w-full bg-gray-950 border border-gray-800 px-4 text-white focus:border-green-500 transition-all outline-none"
                  placeholder="Ex: 75001 Paris"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Type d&apos;habitation
                  </Label>
                  <Select name="from_type">
                    <SelectTrigger className="w-full max-w-48 border border-gray-800 bg-gray-950 px-4 py-4.5 text-white focus:border-green-500 outline-none">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="appartement">Appartement</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Étage
                  </Label>
                  <Input
                    name="from_floor"
                    type="number"
                    className="w-full bg-gray-950 border border-gray-800 px-4 text-white focus:border-green-500 outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 items-center bg-gray-950/50 p-4 rounded-md border border-gray-800/50">
                <span className="text-sm text-gray-400">Ascenseur ?</span>
                <RadioGroup
                  name="from_elevator"
                  defaultValue="option-one"
                  className="flex items-center gap-10"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="oui" id="oui" />
                    <Label htmlFor="oui" className="text-gray-400">
                      Oui
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="non" id="non" />
                    <Label htmlFor="non" className="text-gray-400">
                      Non
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="je ne sais pas" id="je-ne-sais-pas" />
                    <Label htmlFor="je-ne-sais-pas" className="text-gray-400">
                      Je ne sais pas
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-green-500 font-bold text-xl uppercase tracking-wider">
              <div className="w-8 h-1 bg-green-500 rounded-full" /> À
              l&apos;Arrivée
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm text-gray-400 font-medium">
                  Adresse complète (Ville/Pays Europe)
                </Label>
                <Input
                  name="to_address"
                  type="text"
                  className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Type d&apos;habitation
                  </Label>
                  <Select name="to_type">
                    <SelectTrigger className="w-full max-w-48 border border-gray-800 bg-gray-950 px-4 py-4.5 text-white focus:border-green-500 outline-none">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="appartement">Appartement</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Étage
                  </Label>
                  <Input
                    name="to_floor"
                    type="number"
                    className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 items-center bg-gray-950/50 p-4 rounded-md border border-gray-800/50">
                <span className="text-sm text-gray-400">Ascenseur ?</span>
                <RadioGroup
                  name="from_elevator"
                  defaultValue="option-one"
                  className="flex items-center gap-10"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="oui" id="oui" />
                    <Label htmlFor="oui" className="text-gray-400">
                      Oui
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="non" id="non" />
                    <Label htmlFor="non" className="text-gray-400">
                      Non
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="je ne sais pas" id="je-ne-sais-pas" />
                    <Label htmlFor="je-ne-sais-pas" className="text-gray-400">
                      Je ne sais pas
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-green-500 font-bold text-xl uppercase tracking-wider">
              <div className="w-8 h-1 bg-green-500 rounded-full" /> Détails du
              Déménagement
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label className="text-sm text-gray-400 font-medium italic flex items-center gap-2">
                  <Info size={14} /> Liste des meubles volumineux (L / l / h)
                </Label>
                <Textarea
                  name="furniture_list"
                  rows={5}
                  className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none resize-none"
                  placeholder="Ex: Armoire 3 portes, Canapé d'angle, Frigo américain..."
                ></Textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Volume total estimé (m³)
                  </Label>
                  <Input
                    name="total_volume"
                    type="text"
                    className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
                    placeholder="Ex: 30"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-gray-400 font-medium">
                    Date souhaitée
                  </Label>
                  <Input
                    name="moving_date"
                    type="date"
                    className="w-full bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
                  />
                </div>
                <div className="space-y-2 flex flex-col justify-end">
                  <Label className="flex items-center gap-3 text-white bg-gray-950 border border-gray-800 p-3 rounded-xl cursor-pointer hover:border-green-500 transition-colors">
                    <Checkbox
                      name="fragile_items"
                      className="border-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm">Objets fragiles / Piano ?</span>
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-green-600/5 p-6 rounded-md border border-green-500/20">
            <h3 className="flex items-center gap-2 text-white font-bold text-xl uppercase tracking-wider">
              <User className="text-green-500" /> Vos Coordonnées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                name="user_name"
                type="text"
                placeholder="Nom et Prénom"
                className="bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
              />
              <Input
                name="user_email"
                type="email"
                placeholder="Email"
                className="bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
              />
              <Input
                name="user_phone"
                type="tel"
                placeholder="Téléphone"
                className="bg-gray-950 border border-gray-800 px-4 py-3 text-white focus:border-green-500 outline-none"
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center border-t border-gray-800 pt-8">
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                theme="dark"
              />
            </div>

            <Button
              type="submit"
              variant="green"
              disabled={isSending} 
              className={`w-full h-16 lg:text-xl font-black uppercase tracking-widest shadow-green-800 hover:scale-[1.01] transition-all ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? (
                <>
                  Envoi en cours...
                  <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </>
              ) : (
                <>
                  Envoyer ma demande de devis
                  <Truck className="ml-2" size={24} />
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              En envoyant ce formulaire, vous acceptez notre politique de
              confidentialité. Vos données sont utilisées uniquement pour
              l&apos;établissement du devis.
            </p>
          </div>
        </form>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1294.090817759654!2d2.6998424!3d49.5565959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7c4ca687dae61%3A0x3773039c633e3520!2sEURL%20CERDJIO%20DEMENAGEMENT!5e0!3m2!1sfr!2sma!4v1772039900856!5m2!1sfr!2sma"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
