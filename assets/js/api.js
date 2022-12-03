

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/heeydev/Meus-Projetos/master/Todos%20os%20Materiais/Javascript/Portfolio/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}