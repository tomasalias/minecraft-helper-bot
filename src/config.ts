import { config } from "dotenv";
import { BotOptions } from "mineflayer";
import { InventoryViewerOptions } from "mineflayer-web-inventory";
import { join } from "path";
import { ViewerOptions } from "prismarine-viewer";

config();

const BOT_OPTIONS: BotOptions = {
	host: "srv01-eu-central-de-62519.dandix.de",
	username: "Dummy",
	port: 3078,
	version: "1.19",
};

const VIEWER_OPTIONS: ViewerOptions = {
	firstPerson: false,
	port: 3000,
	viewDistance: 8,
};

const INVENTORY_VIEWER_OPTION: InventoryViewerOptions = {
	port: 3001,
};

export const CONFIG = {
	BOT_OPTIONS,
	VIEWER_OPTIONS,
	INVENTORY_VIEWER_OPTION,
	PREFIX: "!",
	STATE_MACHINE_PORT: 3002,
	LOCALE_PARSER_OPTIONS: {
		directory: join(__dirname, "locales"),
		defaultLocale: "en",
	},
};
