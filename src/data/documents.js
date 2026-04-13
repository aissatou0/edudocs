export const documents = [
  {
    id: 1,
    titre: "Titre de séjour",
    categorie: "Visa & Séjour",
    emoji: "🪪",
    description: "Autorisation officielle de résider en France pour les étudiants étrangers.",
    delai: "2 à 4 mois",
    difficulte: "Difficile",
    etapes: [
      {
        numero: 1,
        titre: "Créer un compte ANEF",
        description: "Rendez-vous sur administration-etrangers-en-france.interieur.gouv.fr et créez votre espace personnel.",
        lien: "https://administration-etrangers-en-france.interieur.gouv.fr"
      },
      {
        numero: 2,
        titre: "Rassembler les documents requis",
        description: "Passeport valide, photo d'identité, justificatif de domicile, attestation de l'université, justificatif de ressources (615€/mois min).",
      },
      {
        numero: 3,
        titre: "Déposer le dossier en ligne",
        description: "Connectez-vous à l'ANEF, sélectionnez 'Étudiant' et téléversez tous vos documents scannés."
      },
      {
        numero: 4,
        titre: "Payer les taxes OFII",
        description: "Réglez les timbres fiscaux en ligne (200€ environ) via le site de l'OFII.",
        lien: "https://www.ofii.fr"
      },
      {
        numero: 5,
        titre: "Attendre la convocation",
        description: "L'administration vous envoie un récépissé valable 3 mois. Puis une convocation pour la remise du titre."
      }
    ],
    documentsRequis: ["Passeport valide", "Photo d'identité", "Justificatif de domicile", "Attestation d'inscription", "Justificatif de ressources", "Assurance maladie"]
  },
  {
    id: 2,
    titre: "Aide CAF (APL)",
    categorie: "Logement",
    emoji: "🏠",
    description: "Aide personnalisée au logement versée par la CAF pour réduire votre loyer.",
    delai: "1 à 2 mois",
    difficulte: "Moyen",
    etapes: [
      {
        numero: 1,
        titre: "Vérifier votre éligibilité",
        description: "Vous devez être locataire d'un logement conventionné, avoir moins de 28 ans ou être étudiant boursier.",
        lien: "https://www.caf.fr"
      },
      {
        numero: 2,
        titre: "Créer votre compte CAF",
        description: "Sur caf.fr, créez votre espace 'Mon Compte' avec votre numéro de sécurité sociale."
      },
      {
        numero: 3,
        titre: "Remplir la demande d'APL",
        description: "Dans votre espace CAF, cliquez sur 'Faire une demande de prestation' puis 'Aide au logement'."
      },
      {
        numero: 4,
        titre: "Fournir les justificatifs",
        description: "Contrat de location, RIB, avis d'imposition ou attestation de non-imposition, justificatif d'identité."
      },
      {
        numero: 5,
        titre: "Recevoir le versement",
        description: "La CAF verse l'APL directement à votre propriétaire ou sur votre compte selon l'accord."
      }
    ],
    documentsRequis: ["Contrat de location", "RIB", "Pièce d'identité", "Numéro de sécurité sociale", "Avis d'imposition"]
  },
  {
    id: 3,
    titre: "Carte Vitale",
    categorie: "Santé",
    emoji: "💳",
    description: "Carte d'assurance maladie permettant le remboursement de vos soins en France.",
    delai: "3 à 6 semaines",
    difficulte: "Facile",
    etapes: [
      {
        numero: 1,
        titre: "S'affilier à la Sécurité Sociale",
        description: "Via votre université ou sur ameli.fr si vous avez plus de 20 ans.",
        lien: "https://www.ameli.fr"
      },
      {
        numero: 2,
        titre: "Créer votre compte Ameli",
        description: "Sur ameli.fr, créez votre espace assuré avec votre numéro de sécurité sociale provisoire."
      },
      {
        numero: 3,
        titre: "Envoyer les justificatifs",
        description: "Passeport, justificatif de domicile, RIB, et pour les étudiants : certificat de scolarité."
      },
      {
        numero: 4,
        titre: "Recevoir la carte",
        description: "La Carte Vitale est envoyée par courrier à votre adresse sous 3 à 6 semaines."
      }
    ],
    documentsRequis: ["Passeport", "Justificatif de domicile", "RIB", "Certificat de scolarité"]
  },
  {
    id: 4,
    titre: "Ouverture de compte bancaire",
    categorie: "Finance",
    emoji: "🏦",
    description: "Compte bancaire français indispensable pour recevoir vos bourses et payer votre loyer.",
    delai: "1 à 2 semaines",
    difficulte: "Facile",
    etapes: [
      {
        numero: 1,
        titre: "Choisir une banque",
        description: "BNP Paribas, Société Générale, ou une banque en ligne comme Lydia/Revolut qui sont plus rapides pour les étrangers."
      },
      {
        numero: 2,
        titre: "Préparer les documents",
        description: "Passeport, justificatif de domicile (moins de 3 mois), attestation de l'université."
      },
      {
        numero: 3,
        titre: "Faire la demande",
        description: "En agence ou en ligne selon la banque choisie. Pour les banques en ligne : tout se fait via l'application."
      },
      {
        numero: 4,
        titre: "Recevoir votre RIB",
        description: "Une fois le compte ouvert, vous recevez votre RIB (Relevé d'Identité Bancaire) indispensable pour toutes les démarches."
      }
    ],
    documentsRequis: ["Passeport", "Justificatif de domicile", "Attestation universitaire"]
  },
  {
    id: 5,
    titre: "Attestation d'hébergement",
    categorie: "Logement",
    emoji: "📄",
    description: "Document prouvant votre lieu de résidence, requis pour quasiment toutes les démarches.",
    delai: "Immédiat",
    difficulte: "Facile",
    etapes: [
      {
        numero: 1,
        titre: "Identifier l'hébergeant",
        description: "La personne qui vous héberge (propriétaire, sous-locateur, hébergeur à titre gratuit) doit rédiger l'attestation."
      },
      {
        numero: 2,
        titre: "Rédiger l'attestation",
        description: "Le document doit mentionner : nom, prénom, adresse de l'hébergeant, votre identité, la durée d'hébergement et la signature."
      },
      {
        numero: 3,
        titre: "Joindre les pièces de l'hébergeant",
        description: "Copie de sa pièce d'identité et d'un justificatif de domicile à son nom (facture EDF, quittance de loyer...)."
      }
    ],
    documentsRequis: ["Pièce d'identité de l'hébergeant", "Justificatif de domicile de l'hébergeant"]
  },
  {
    id: 6,
    titre: "Bourse CROUS",
    categorie: "Finance",
    emoji: "🎓",
    description: "Aide financière de l'État français pour les étudiants selon critères sociaux.",
    delai: "2 à 3 mois",
    difficulte: "Moyen",
    etapes: [
      {
        numero: 1,
        titre: "Vérifier l'éligibilité",
        description: "Avoir moins de 28 ans, être inscrit en formation initiale, remplir les critères de ressources."
      },
      {
        numero: 2,
        titre: "Faire le DSE",
        description: "Remplir le Dossier Social Étudiant sur messervices.etudiant.gouv.fr entre janvier et mai.",
        lien: "https://www.messervices.etudiant.gouv.fr"
      },
      {
        numero: 3,
        titre: "Fournir les justificatifs fiscaux",
        description: "Avis d'imposition de vos parents ou équivalent du pays d'origine traduit et légalisé."
      },
      {
        numero: 4,
        titre: "Recevoir la notification",
        description: "Le CROUS vous notifie par email de votre échelon de bourse (0 à 7) et du montant mensuel."
      }
    ],
    documentsRequis: ["Pièce d'identité", "Justificatif de domicile", "Avis d'imposition parents", "Certificat de scolarité", "RIB"]
  }
]

export const categories = ["Tous", "Visa & Séjour", "Logement", "Santé", "Finance"]