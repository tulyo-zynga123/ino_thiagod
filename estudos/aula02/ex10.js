//O codigo produtos.map(async (p) => await buscarDetalhe(p.id)) não espera porque o metodo .map() ignora o retorno das promessas geradas pelo callback assincrono.//
