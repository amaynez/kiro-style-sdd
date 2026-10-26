

# Habilidades de Agente para Desarrollo Guiado por Especificaciones (SDD)

*Esta metodología se inspiró en cómo Kiro, el IDE de IA de Amazon, realiza el Desarrollo Guiado por Especificaciones (SDD).*

Este repositorio proporciona "Habilidades de Agente" nativas para guiar a los Agentes de IA a través de la metodología de Desarrollo Guiado por Especificaciones (SDD). Al aprovechar estas habilidades, puedes transformar de manera predecible y sistemática una idea básica de función en una implementación ejecutable y orientada a pruebas.

## Resumen de las Habilidades

La metodología SDD se ha modernizado en cuatro habilidades distintas, accesibles a través de comandos con barra invertida en los agentes de IA compatibles:

1. **/spec**: Transforma una idea básica de función en un documento de requisitos estructurado utilizando el formato EARS.
2. **/design**: Desarrolla un documento de diseño técnico exhaustivo (arquitectura, modelos de datos, componentes) basado en los requisitos aprobados.
3. **/plan**: Crea un plan de implementación ejecutable, generando una lista de tareas optimizada para agentes de codificación con IA.
4. **/implement**: Ejecuta una única tarea de codificación del plan de implementación, garantizando un alcance adecuado, pruebas tempranas y validación continua.

## Agentes Compatibles

Estas habilidades están estructuradas utilizando el estándar abierto de Agent Skills y son compatibles listas para usar con:
- **Claude Code**: Utiliza `~/.claude/skills/`
- **Cursor**: Utiliza `.cursor/rules/` y `.cursorrules`
- **Kiro**: Utiliza `.kiro/skills/`
- **Otros Agentes de IA**: Detecta automáticamente el directorio `.skills/`

## Instalación y Configuración

Puedes instalar estas habilidades usando npm o copiarlas manualmente en tu proyecto.

### Instalación con NPM

**Instalación Local (Recomendada)**
Para instalar las habilidades localmente en tu proyecto, ejecuta:
```bash
npm install amaynez-sdd
```

**Instalación Global**
Para instalar las habilidades globalmente en tu máquina, ejecuta:
```bash
npm install -g amaynez-sdd
```

### Instalación Manual

Si prefieres no usar npm, o si estás utilizando este repositorio directamente (donde las habilidades ya están configuradas), puedes copiar manualmente las habilidades en tu proyecto o en la configuración global del agente:

1. Clona o descarga este repositorio.
2. Copia todo el contenido del directorio `.skills/`.
3. Pega el contenido en una de las siguientes ubicaciones según tu agente de IA:
   - **Raíz del Proyecto**: `.skills/` (Funciona automáticamente para muchos agentes estándar)
   - **Claude Code**: `~/.claude/skills/` (Configuración global)
   - **Cursor**: `.cursor/rules/` (Configuración a nivel de proyecto)
   - **Kiro**: `.kiro/skills/` (Configuración a nivel de proyecto)

*Nota: Las configuraciones de agente para diferentes clientes se encuentran en sus respectivos directorios ocultos en la raíz de este proyecto (por ejemplo, `.claude`, `.cursor`, `.kiro`).*

## Uso

Inicia tu agente de IA en este repositorio y escribe uno de los siguientes comandos:

- `/spec` - Inicia la recopilación de requisitos.
- `/design` - Comienza el diseño técnico.
- `/plan` - Genera el plan de implementación.
- `/implement` - Comienza a escribir código.

El agente te solicitará en cada paso que revises y apruebes los documentos antes de pasar a la siguiente fase, asegurando que mantengas el control total sobre la arquitectura y los detalles de implementación.
