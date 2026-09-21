import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "IM",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2023-06-21",
  publishVersion: "0.0.3",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://improrail.github.com/trein/",
  prevVersion: [],

  editors:
    [
      {
        name: "Arnoud de Boer",
        company: "ProRail",
        companyURL: "https://www.prorail.nl",
      }
    ],
  authors:
    [
      {
        name: "Arnoud de Boer",
        company: "ProRail",
        companyURL: "https://logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",
});
