

async function fetchProfileData() {
    const url = 'https://github.com/heeydev/Portfolio/blob/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
