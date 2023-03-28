import path from 'path';
import z from 'zod';
import fs from 'node:fs';

function convertToInt(v: any) {
    if (typeof v !== 'string') {
        return undefined;
    }
    return parseInt(v);
}

export function envConfig() {
    return z.object({
        PORT: z.preprocess(
            convertToInt,
            z
                .number()
                .finite()
                .int()
                .min(1)
                .max(2 ** 16)
                .default(3000),
        ),
    });
}

/**
 *
 * @returns List of env files already exists
 */
export function envFiles(): string[] {
    const NODE_ENV = process.env['NODE_ENV'] || 'development';
    const envDirectory = path.join(__dirname, '../../env/');

    const results = [
        path.join(envDirectory, '.env'),
        path.join(envDirectory, `.env.${NODE_ENV}`),
    ].filter((filePath) => {
        return fs.existsSync(filePath);
    });

    return results;
}

export type EnvType = z.infer<ReturnType<typeof envConfig>>;
