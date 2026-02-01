import requests
import os


def DownloadFile(url: str, filename: str):
    headers = {"User-Agent": "Mozilla/5.0"}

    try:

        response = requests.get(url, headers=headers, timeout=10, allow_redirects=True)

        response.raise_for_status()

        BASE_DIR = os.path.dirname(os.path.abspath(__file__))
        DOWNLOAD_DIR = os.path.join(BASE_DIR, "downloads")

        os.makedirs(DOWNLOAD_DIR, exist_ok=True)

        file_path = os.path.join(DOWNLOAD_DIR, filename)

        if response.status_code == 200:
            with open(file_path, "wb") as f:
                f.write(response.content)

        else:
            print("failed to download")

        return file_path

    except requests.exceptions.RequestException as e:
        print(e)
        return
